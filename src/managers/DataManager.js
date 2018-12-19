class DataManager{
  constructor(){
    this.messages = [];
  }

  fetchData(fromId,toId){
    this.messages = [];
  }

  getMessages(){
    return this.messages;
  }
}

export default new DataManager();
