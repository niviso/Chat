import DataManager from './managers/DataManager';
class DataState{
  constructor(){
    this.selectedId = 1; //what id are you chatting with
    this.myId = 0;
    this.dataManager = DataManager;
  }
}

export default new DataState();
