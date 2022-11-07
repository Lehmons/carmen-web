import Head from "next/head";
import styled from "styled-components";
// Creating a styled-component
const Test = styled.p`
  font-size: 40px;
  color: blue;
`;
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/*Testing Styled component */}
        <Test>Hello</Test>
      </main>
    </div>
  );
}
