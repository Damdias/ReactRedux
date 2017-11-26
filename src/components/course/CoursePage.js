import React from "react";

class CoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.onTitleChanged = this.onTitleChanged.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.state = {
            course: { title: "" }
        }
    }
    onTitleChanged(e) {
        const course = this.state.course;
        course.title = e.target.value;
        this.setState({course:course});
    }
    onClickSave (){
        alert(this.state.course.title);
    }
    render() {
        return (
            <div>
                <h1>Coursers</h1>
                <h2>Add Courses</h2>
                <input type="text" onChange={this.onTitleChanged}
                    value={this.state.course.title}
                />
                <input type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}
export default CoursePage;