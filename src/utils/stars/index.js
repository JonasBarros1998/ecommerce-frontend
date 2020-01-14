import React from 'react'

export const Star = (props) => {
  const listIcons = []
  const { note } = props
  for (let index = 1; index <= note; index++) {
    listIcons.push(<i {...props} key={index} ></i>)
  }

  return (
    <>
      {listIcons}
    </>)
}
/*
export const iconEffect = () => {
  
  let totalNote = 0
  let testando = {}
  const icons = document.querySelectorAll(`.stars-active`)
  for (let index = 0; index < icons.length; index++) {
    console.log(index)
    console.log("segundo click")
    icons[index].addEventListener('click', () =>{
      console.log("OK")
      testando["numero"] = index
    })
    
    for (let color = index; color >= 0; color--) {
      icons[color].style.color = "yellow"
    }

    //console.log(testando)
    //return testando
  }*/
