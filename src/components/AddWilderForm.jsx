import React, { useRef, useState } from 'react';
import { StyleContainerRose } from './styles/StyleContainer';
import { StyleForm } from './styles/form-inputs/StyleForm';
import { StyleButton, StyleButtonY } from './styles/StyleButton';
import classes from './AddWilderForm.module.css';
import Skill from './Skill';

const AddWilderForm = (props) => {
  const [skills, setSkills] = useState(['html', 'css']);
  const [skill, setSkill] = useState('');
  const nameRef = useRef();
  const cityRef = useRef();
  const skillRef = useRef();
  const checkRef = useRef();


  const skillHandler = (e)=>{
      setSkill(e.target.value)
  }

  const addSkillHandler = ()=>{
    setSkills((prevState)=>{
        return [...prevState, skillRef.current.value ]
    })
    setSkill('');
  }

  const removeSkillHandler = (title)=>{
   const arr = skills.filter(skill=> skill.toLowerCase() !==title.toLowerCase());
   setSkills(arr);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (checkRef.current.checked) {
      console.log('form is ready to submit');
    }
  };

  return (
    <StyleContainerRose>
      <StyleForm onSubmit={onSubmitHandler}>
        <label>Name</label>
        <input ref={nameRef} type='text' />
        <label>City</label>
        <input ref={cityRef} type='text' />

        {/* SKILL ADD */}
        <div>
          <input onChange={skillHandler} ref={skillRef} value={skill} type='text' />
          <StyleButtonY onClick={addSkillHandler}>Add</StyleButtonY>
        </div>

        {/* SKILL LISTING */}
        <div>
          {skills && skills.map((skill, index) => <Skill onClick={removeSkillHandler} key={index} title={skill} votes={0} />)}
        </div>

        <div className={classes['flex-r']}>
          <input ref={checkRef} className={classes.checkbox} type='checkbox' />
          <label>Check Box When Ready to Submit</label>
        </div>
        <StyleButton>Click</StyleButton>
      </StyleForm>
    </StyleContainerRose>
  );
};

export default AddWilderForm;
