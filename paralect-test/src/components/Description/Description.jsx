import parse from 'html-react-parser';
import cl from './Description.module.css';

export const Description = (props) => {
  const { vacancyRichText } = props.vacancy;
  return <div className={cl['description']}>{parse(vacancyRichText)}</div>;
};
