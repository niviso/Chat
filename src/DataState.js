import DataManager from './managers/DataManager';
class DataState{
  constructor(){
    this.dataManager = DataManager;
    this.friends = [
        {
          id: 0,
          name: 'Nikki Sollid',
          img: 'https://cdn.road.cc/sites/default/files/pictures/picture-35067-1466804626.gif',
          scheme: 'default'
        },
        {
          id: 1,
          name: 'Lisa Normal',
          img: 'https://cdn.dribbble.com/users/1210339/screenshots/2773807/avatar20.gif',
          scheme: 'default'
        },
        {
          id: 2,
          name: 'Nina Andersson',
          img: 'https://static1.squarespace.com/static/50ff1acce4b047a6c7999c73/t/5bb7c3ec71c10b625db29fb6/1538769908525/DeeKay%2B2018%2BAvatar%2B%28instagram%29.gif',
          scheme: 'default'
        },

      ]
  }
}

export default new DataState();
