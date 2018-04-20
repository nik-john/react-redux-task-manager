import Section from './Section';

const CenteredSection = Section.extend`
  text-align: center;
  color: ${(props) => props.theme.white};
`;

export default CenteredSection;
