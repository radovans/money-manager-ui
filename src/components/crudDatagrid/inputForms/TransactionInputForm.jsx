import React from "react";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Field from "components/Field";
import DropdownField from "components/DropdownField";
import {
  useGetAccountsQuery,
  useGetCategoriesQuery,
  useGetSubcategoriesQuery,
} from "state/api";

const TransactionInputForm = (props) => {
  //   Fetch subcategories
  const { data: subcategories } = useGetSubcategoriesQuery({
    category: props.data.category,
    forceRefetch: true,
  });

  //   Fetch categories
  const { data: categories } = useGetCategoriesQuery({
    forceRefetch: true,
  });

  //   Fetch accounts
  const { data: accounts } = useGetAccountsQuery({
    forceRefetch: true,
  });

  //   Define currencies
  const currencies = [
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "CZK",
      label: "CZK",
    },
  ];

  return (
    <Box marginBottom={"20px"}>
      <Field
        label="Date"
        value={props.data.date}
        onChange={(e) => props.setData({ ...props.data, date: e.target.value })}
      />
      <Field
        label="Note"
        value={props.data.note}
        onChange={(e) => props.setData({ ...props.data, note: e.target.value })}
      />
      <Field
        label="Recipient"
        value={props.data.recipient}
        onChange={(e) =>
          props.setData({ ...props.data, recipient: e.target.value })
        }
      />
      {/* <Field
        label="Amount"
        value={props.data.amount}
        onChange={(e) =>
          props.setData({ ...props.data, amount: e.target.value })
        }
      /> */}

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          endAdornment={<InputAdornment position="start">{props.data.currency}</InputAdornment>}
          label="Amount"
          value={props.data.amountInCzk}
          onChange={(e) =>
            props.setData({ ...props.data, amountInCzk: e.target.value, amount: e.target.value })
          }
        />
      </FormControl>
      <TextField
        id="outlined-select-currency"
        select
        label="Currency"
        value={props.data.currency}
        onChange={(e) =>
          props.setData({ ...props.data, currency: e.target.value })
        }
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <DropdownField
        label="Category"
        value={props.data.category}
        onChange={(e) =>
          props.setData({ ...props.data, category: e.target.value })
        }
        values={categories}
      />
      <DropdownField
        label="Subcategory"
        value={props.data.subcategory}
        onChange={(e) =>
          props.setData({ ...props.data, subcategory: e.target.value })
        }
        values={subcategories}
      />
      <DropdownField
        label="Account"
        value={props.data.account}
        onChange={(e) =>
          props.setData({ ...props.data, account: e.target.value })
        }
        values={accounts}
      />
      <Field
        label="Label"
        value={props.data.label}
        onChange={(e) =>
          props.setData({ ...props.data, label: e.target.value })
        }
      />
    </Box>
  );
};

export default TransactionInputForm;
