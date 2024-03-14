import instruction_page from './InstructionImg/instruction_prev-page.jpg'
import './InstructionPage.scss';

export const InstructionPage = () => {
  return (
    <section className="instructions">
      <img src={instruction_page} alt="instruction_prev" />
    </section>
  );
};