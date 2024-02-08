import theme from "../../../styles/theme";

const buttonCustomStyle = {
  seen: {
    borderColor: theme.palette.rumoaoimeCustomColors.grey,
    borderWidth: 2,
    borderStyle: "solid",
    color: "black",
    backgroundColor: theme.palette.rumoaoimeCustomColors.lightGrey,
  },
  notSeen: {
    borderColor: theme.palette.rumoaoimeCustomColors.grey,
    borderWidth: 2,
    borderStyle: "solid",
    color: "black",
    backgroundColor: "white",
  },
  current: {
    borderColor: theme.palette.rumoaoimeCustomColors.grey,
    borderWidth: 2,
    borderStyle: "solid",
    color: "white",
    backgroundColor: theme.palette.rumoaoimeCustomColors.darkerGrey,
  },
  marked: {
    borderColor: theme.palette.rumoaoimeCustomColors.grey,
    borderWidth: 2,
    borderStyle: "solid",
    color: "white",
    backgroundColor: theme.palette.rumoaoimeCustomColors.darkBlue,
  },
};

export default buttonCustomStyle;