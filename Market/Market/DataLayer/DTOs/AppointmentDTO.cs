using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Market.DomainLayer;

namespace Market.DataLayer.DTOs
{
    [Table("Appointments")]
    public class AppointmentDTO
    {
        [Key]
        [ForeignKey("MemberDTO")]
        public int MemberId { get; set; }
        [Key]
        [ForeignKey("ShopDTO")]
        public int ShopId { get; set; }
        public MemberDTO? Appointer { get; set; }
        public List<MemberDTO> Appointees { get; set; }
        public string Role {get; set; }
        public int Permissions { get; set; }

        public AppointmentDTO() { }
        public AppointmentDTO(Appointment appointment) {
            lock (MarketContext.MarketContextLock)
            {
                MarketContext context = MarketContext.GetInstance();
                MemberId = appointment.Member.Id;
                ShopId = appointment.Shop.Id;
                if (appointment.Appointer != null)
                    Appointer = context.Members.Find(appointment.Appointer.Id);
                Appointees = new List<MemberDTO>();
                foreach (Member member in appointment.Apointees)
                    Appointees.Add(context.Members.Find(member.Id));
                Role = appointment.Role.ToString();
                Permissions = (int)appointment.Permissions;
            }
        }

        public AppointmentDTO(int memberId, int shopId, MemberDTO appointer, List<MemberDTO> appointees, string role, int permissions)
        {
            MemberId = memberId;
            ShopId = shopId;
            Appointer = appointer;
            Appointees = appointees;
            Role = role;
            Permissions = permissions;
        }
    }
}
