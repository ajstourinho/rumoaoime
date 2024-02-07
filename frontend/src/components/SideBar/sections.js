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
    // {
    //     name: "Conteúdos",
    //     pages: [
    //         {
    //             name: "Matemática",
    //             icon: <CalculateIcon />,
    //             navigateTo: "/conteudos/matematica",
    //             selectedColor: theme.palette.rumoaoimeCustomColors.matematica
    //         },
    //         {
    //             name: "Física",
    //             icon: <PsychologyIcon />,
    //             navigateTo: "/conteudos/fisica",
    //             selectedColor: theme.palette.rumoaoimeCustomColors.fisica
    //         },
    //         {
    //             name: "Química",
    //             icon: <ScienceIcon />,
    //             navigateTo: "/conteudos/quimica",
    //             selectedColor: theme.palette.rumoaoimeCustomColors.quimica
    //         },
    //         {
    //             name: "Português",
    //             icon: <AbcIcon />,
    //             navigateTo: "/conteudos/portugues",
    //             selectedColor: theme.palette.rumoaoimeCustomColors.portugues
    //         },
    //         {
    //             name: "Inglês",
    //             icon: <LanguageIcon />,
    //             navigateTo: "/conteudos/ingles",
    //             selectedColor: theme.palette.rumoaoimeCustomColors.ingles
    //         },
    //         {
    //             name: "Redação",
    //             icon: <DriveFileRenameOutlineIcon />,
    //             navigateTo: "/conteudos/redacao",
    //             selectedColor: theme.palette.rumoaoimeCustomColors.redacao
    //         },
    //     ]
    // },
    {
        name: "Provas anteriores",
        pages: [
            {
                name: "Objetivas",
                icon: <RuleIcon />,
                navigateTo: "/provas-anteriores/objetivas",
                selectedColor: theme.palette.rumoaoimeCustomColors.lightGrey
            },
            {
                name: "Discursivas",
                icon: <EditNoteIcon />,
                navigateTo: "/provas-anteriores/discursivas",
                selectedColor: theme.palette.rumoaoimeCustomColors.lightGrey
            },
        ]
    },
    // {
    //     name: "Simulados",
    //     pages: [
    //         {
    //             name: "Objetivos",
    //             icon: <AssignmentTurnedInIcon />,
    //             navigateTo: "/simulados/objetivos",
    //             selectedColor: theme.palette.rumoaoimeCustomColors.lightGrey
    //         },
    //         {
    //             name: "Discursivos",
    //             icon: <AssignmentIcon />,
    //             navigateTo: "/simulados/discursivos",
    //             selectedColor: theme.palette.rumoaoimeCustomColors.lightGrey
    //         },
    //     ]
    // },
];

export default sections;