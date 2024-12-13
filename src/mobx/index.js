import {action, observable, runInAction} from "mobx";

var globalStore = observable({
    pageIndex : "",
	setPageIndex(index){
		runInAction(()=>{
			this.pageIndex =index;
		});

	}
},{
	setPageIndex: action
})
export {globalStore};
