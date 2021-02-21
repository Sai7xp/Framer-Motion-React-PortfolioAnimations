import styled from "styled-components";
export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all ease 0.3s;
  color: white;
  padding: 4.2rem 4.4rem;
`;
export const Description = styled.div`
  flex: 1;
  transition: all ease 0.3s;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.div`
  flex: 1;
  transition: all ease 0.3s;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;