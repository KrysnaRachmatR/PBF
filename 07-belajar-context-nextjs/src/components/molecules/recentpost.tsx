import exp from "constants";
import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function RecentPost(){
    return(
        <Section2 isFancy = {true}>
            <Heading>Posting Terbaru</Heading>
            <Post
            title="Nama"
            body="Krysna Rachmat Ramadhan Budiono"
            />
            <Post
            title="NIM"
            body="2141720219"
            />
        </Section2>
    );
}