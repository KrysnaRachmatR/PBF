import ToDoList from "./todolist";

export default function Bio(){
    return(
        <>
        <div className="intro">
            <h1>Selamat datang di website!</h1>
        </div>
        <p className="summary justify-center mt-36">
            Anda dapat membaca uneg-unegku disini.
            <br/>
            <br/>
        <strong className="justify-center mt-36">Juga ada <em>foto</em> Ilmuwan</strong>
        </p>
    </>
    );
}