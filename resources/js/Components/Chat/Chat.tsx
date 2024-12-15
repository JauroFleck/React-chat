import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { IUser } from "@/types/IUser";
import { IMessage } from "@/types/IMessage";

export default function Chat({ user, messages }: { user: IUser, messages: IMessage[] }) {
    return (
        <Box sx={{ m: '2em', p: '1em', border: '1px solid lightgrey', borderRadius: '1em', backgroundColor: 'rgb(230, 230, 230)' }}>
            <ChatHeader user={user} />
            <ChatBody user={user} messages={messages} />
            <ChatFooter user={user} />
        </Box>
    );
}