import Heading from "../atoms/heading";
import Section2 from "../atoms/section2";
import Post from "../atoms/post";
import AllPosts from "../organisms/allpost";

export default function ContactPage(){
    return(
        <Section2 isFancy={true}>
            <Heading>Profile Saya</Heading>
            <Post
                title="Hello Traveller!"
                body="Baca tentang saya."
            />
            <AllPosts/>
        </Section2>
    );
}