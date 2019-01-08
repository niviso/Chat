import DataManager from './managers/DataManager';
import DataState from './DataState';

class ChatState{
  constructor(){
    this.selectedId = 1; //what id are you chatting with
    this.myId = 0;
    this.dataManager = DataManager;
    this.dataState = DataState;
  }
}

export default new ChatState();
