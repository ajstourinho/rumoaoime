import HomeIcon from '@mui/icons-material/Home';
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

const sections = [
    {
        name: "",
        pages: [
            {
                name: "Meu progresso",
                icon: <HomeIcon />
            },
        ]
    },
    {
        name: "Conteúdos",
        pages: [
            {
                name: "Matemática",
                icon: <CalculateIcon />
            },
            {
                name: "Física",
                icon: <PsychologyIcon />
            },
            {
                name: "Química",
                icon: <ScienceIcon />
            },
            {
                name: "Português",
                icon: <AbcIcon />
            },
            {
                name: "Inglês",
                icon: <LanguageIcon />
            },
            {
                name: "Redação",
                icon: <DriveFileRenameOutlineIcon />
            },
        ]
    },
    {
        name: "Provas anteriores",
        pages: [
            {
                name: "Objetivas",
                icon: <RuleIcon />
            },
            {
                name: "Discursivas",
                icon: <EditNoteIcon />
            },
        ]
    },
    {
        name: "Simulados",
        pages: [
            {
                name: "Objetivos",
                icon: <AssignmentTurnedInIcon />
            },
            {
                name: "Discursivos",
                icon: <AssignmentIcon />
            },
        ]
    },
];

export default sections;