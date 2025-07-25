import Heading from "./Heading";
import Section from "./Section";

type PostPros = {
  title: string;
  body: string;
};

export default function Post({ title, body }: PostPros) {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
}
