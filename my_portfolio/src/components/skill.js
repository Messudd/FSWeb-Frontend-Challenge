import '../css/skill.css';

function Skill({skill_name}) {

    return (
    <div className='card-skill'>
      <img style = {{border: '1px solid transparent', borderRadius: '10px'}} src= {`${skill_name}`} alt="skill-icon" width={65} height={60} />
    </div>
  )
}

export default Skill;
