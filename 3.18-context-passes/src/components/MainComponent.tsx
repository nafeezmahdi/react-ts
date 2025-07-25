import AllPosts from "./AllPosts";
import Heading from "./Heading";
import Post from "./Post";
import Section from "./Section";

export default function MainComponent() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title="Hello traveler!" body="Read about my adventures." />
      <AllPosts />
    </Section>
  );
}
