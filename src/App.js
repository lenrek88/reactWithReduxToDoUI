import './App.css';
import React, {useState, useEffect} from "react";

// Нужны куки и исправить key

function Context(props) {

    const [state, setState] = useState(true)
    const [checkbox, setCheckbox] = useState("not-completed")

    function handleClick(e) {
        e.preventDefault();
        setState(!state)
    }

    function handleCheckbox() {
         setCheckbox(checkbox === "not-completed" ? "not-completed done" : "not-completed")
    }

    if (state) {
        return (
                <div className="high-task" key={Number(props.key)}>
                    <div className="add-task">
                        <form className={checkbox}>
                            <input type="checkbox" onClick={handleCheckbox} placeholder="Добавить важных дел"/>
                            <label>{props.labelItem}</label>
                            <button type="button" onClick={handleClick} className="buttonDelete"/>
                        </form>
                    </div>
                </div>
        );
    }

}

function HandleContentAdd (props) {

       return (
           props.list.map((item, index) => {
                  return ( <Context
                       key = {index}
                       labelItem = {item}
                   />
                  )

           })
       )



}

function ContentAdd(props) {
    const [change, setChange] = useState('')
    const [list, setList] = useState ([])

    function saveValue(e) {
        setChange(e.target.value)
    }

    function HandleButton(e) {
        e.preventDefault()
        setList([...list, change])
        setChange('')
    }

    return (
        <>
            <form className="task add">
                <input type="text" className="new task" onChange={saveValue} value={change} placeholder="Добавить важных дел"/>
                <button className="sumbit task" onClick={HandleButton}/>
            </form>
            <HandleContentAdd list={list} visual={true}/>
        </>
    );
}

function Content () {
    return (
        <div className="content">
            <div className="text one">HIGH</div>
            <ContentAdd/>
            <div className="text one">LOW</div>
            <ContentAdd/>
        </div>
    );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Content/>
      </header>
    </div>
  );
}


export default App;
