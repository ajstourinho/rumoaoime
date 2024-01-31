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

const sections = [
    {
        name: "",
        pages: [
            {
                name: "Meu progresso",
                icon: <TimelineIcon />,
                navigateTo: "/meu-progresso",
                selectedColor: "#26279B"
            },
        ]
    },
    {
        name: "Conteúdos",
        pages: [
            {
                name: "Matemática",
                icon: <CalculateIcon />,
                navigateTo: "/conteudos/matematica",
                selectedColor: "#7884CB"
            },
            {
                name: "Física",
                icon: <PsychologyIcon />,
                navigateTo: "/conteudos/fisica",
                selectedColor: "#CB9178"
            },
            {
                name: "Química",
                icon: <ScienceIcon />,
                navigateTo: "/conteudos/quimica",
                selectedColor: "#B2C8AC"
            },
            {
                name: "Português",
                icon: <AbcIcon />,
                navigateTo: "/conteudos/portugues",
                selectedColor: "#D9D67D"
            },
            {
                name: "Inglês",
                icon: <LanguageIcon />,
                navigateTo: "/conteudos/ingles",
                selectedColor: "#9D6C9B"
            },
            {
                name: "Redação",
                icon: <DriveFileRenameOutlineIcon />,
                navigateTo: "/conteudos/redacao",
                selectedColor: "#607880"
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
                selectedColor: "#AAA"
            },
            {
                name: "Discursivas",
                icon: <EditNoteIcon />,
                navigateTo: "/provas-anteriores/discursivas",
                selectedColor: "#AAA"
            },
        ]
    },
    {
        name: "Simulados",
        pages: [
            {
                name: "Objetivos",
                icon: <AssignmentTurnedInIcon />,
                navigateTo: "/simulados/objetivos",
                selectedColor: "#AAA"
            },
            {
                name: "Discursivos",
                icon: <AssignmentIcon />,
                navigateTo: "/simulados/discursivos",
                selectedColor: "#AAA"
            },
        ]
    },
];

export default sections;