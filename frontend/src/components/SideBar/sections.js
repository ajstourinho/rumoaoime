import TimelineIcon from '@mui/icons-material/Timeline';
import CalculateIcon from '@mui/icons-material/Calculate';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ScienceIcon from '@mui/icons-material/Science';
import AbcIcon from '@mui/icons-material/Abc';
import LanguageIcon from '@mui/icons-material/Language';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import RuleIcon from '@mui/icons-material/Rule';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

import theme from '../../styles/theme';

const sections = [
    {
        name: "",
        pages: [
            {
                name: "Meu progresso",
                icon: <TimelineIcon />,
                navigateTo: "/meu-progresso",
                selectedColor: theme.palette.rumoaoimeCustomColors.darkBlue
            },
        ]
    },
    {
        name: "Provas anteriores",
        pages: [
            {
                name: "Objetivas",
                icon: <RuleIcon />,
                navigateTo: "/provas-anteriores/objetivas",
                selectedColor: theme.palette.rumoaoimeCustomColors.darkGrey
            },
            {
                name: "Discursivas",
                icon: <EditNoteIcon />,
                navigateTo: "/provas-anteriores/discursivas",
                selectedColor: theme.palette.rumoaoimeCustomColors.darkGrey
            },
        ]
    },
];

export default sections;