import Chip from "@mui/material/Chip";

export default function MasterChip({value})
{
  return (
    <Chip size={"medium"} label={value} color={getMethodColor(value)} />
  );
}

function getMethodColor(method)
{
  switch(method.toLowerCase())
  {
    case "get":
      return "success";
    case "put":
      return "primary";
    case "post":
      return "warning";
    case "delete":
      return "error";
    default:
      return "info";
  }
}
