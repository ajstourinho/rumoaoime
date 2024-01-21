import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const sections = [
    {
        name: "",
        pages: [
            {
                name: "Meu progresso",
                icon: <InboxIcon />
            },
        ]
    },
    {
        name: "Conteúdos",
        pages: [
            {
                name: "Matemática",
                icon: <InboxIcon />
            },
            {
                name: "Física",
                icon: <DraftsIcon />
            },
            {
                name: "Química",
                icon: <DraftsIcon />
            },
            {
                name: "Português",
                icon: <DraftsIcon />
            },
            {
                name: "Inglês",
                icon: <DraftsIcon />
            },
            {
                name: "Redação",
                icon: <DraftsIcon />
            },
        ]
    },
    {
        name: "Provas anteriores",
        pages: [
            {
                name: "Objetivas",
                icon: <InboxIcon />
            },
            {
                name: "Discursivas",
                icon: <DraftsIcon />
            },
        ]
    },
    {
        name: "Simulados",
        pages: [
            {
                name: "Objetivos",
                icon: <InboxIcon />
            },
            {
                name: "Discursivos",
                icon: <DraftsIcon />
            },
        ]
    },
];

export default sections;