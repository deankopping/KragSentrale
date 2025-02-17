import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  @media (max-width: 768px) {
    margin-inline: 0;
    margin-top: 0;
  }
`;

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Wrapper>{children}</Wrapper>;
}
