import TextField from "@mui/material/TextField";
type Props = {
  type: string;
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};
const CustomizedInput = (props: Props) => {
  return (
    <TextField
      margin="normal"
      InputLabelProps={{
        style: {
          color: "#1A365D",
          fontFamily:
            "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
          fontWeight: "bold",
          fontSize: "20px",
        },
      }}
      name={props.name}
      label={props.label}
      type={props.type}
      InputProps={{
        style: {
          width: "400px",
          borderRadius: 10,
          fontSize: 20,
          color: "#1A365D",
        },
      }}
      onChange={(e) => {
        props.onChange(e);
      }}
      onKeyPress={props.onKeyPress}
    />
  );
};

export default CustomizedInput;
