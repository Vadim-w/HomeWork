import {setLoading} from "../redux/juniorReducer/juniorReducer";
import React from "react";
import {Junior} from "./Junior";
import {RootState} from "../redux/store";
import {connect} from "react-redux";

type JuniorContainerPropsType = {
    loading: boolean
    setLoading: (loading: boolean) => void
}

const JuniorContainer = (props: JuniorContainerPropsType) => {
    return (
        <Junior loading={props.loading} setLoading={props.setLoading}/>
    )
}
let mapStateToProps = (state: RootState) => ({
    loading: state.juniorReducer.loading
})
export default connect(mapStateToProps, {setLoading})(JuniorContainer);

