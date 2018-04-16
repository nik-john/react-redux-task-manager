import Section from './Section';

const CenteredSection = Section.extend`
  text-align: center;
  color: ${(props) => props.theme.colors.text.light};
`;

export default CenteredSection;
