import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CheckoutDTO from "../../Objects/Checkout";

export default function AddressForm({ checkout }: { checkout: CheckoutDTO }) {
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkout.fullName = e.currentTarget.value;
  };
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkout.address = e.currentTarget.value;
  };
  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkout.city = e.currentTarget.value;
  };
  const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkout.country = e.currentTarget.value;
  };
  const handleZip = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkout.zip = e.currentTarget.value;
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={handleName}
            id="fullName"
            name="fullName"
            label="Full Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={handleAddress}
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={handleCity}
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={handleCountry}
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={handleZip}
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
