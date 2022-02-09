import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
// import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
//mình chưa hiểu ý bạn ... bạn đang bị hiểu nhầm rồi,.... tại sao phải bắt buộc xử lý route ở App.js bạn có link FB call mình giải thích cho bạn 1 lần
// Dạ em hiểu rồi ạ, vậy hiện thực ở class component, nhưng hiện tại em chưa hiện thực được functional component ấy ạ
    // const DishWithId = ({match}) => {
    //   return(
    //       <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
    //         comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    //   );
    // };

    const HomePage = () => {

    }
      return (
      // <Home />
        <div>
          {/* <Home /> */}
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
          {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        </div>
      );
    // }
// Cái này hiện thực ở App.js phải không ạ? bạn có thể thực hiên ở app js .... tuy nhiên bạn để 1 file MainCOmpoent như thế này sẽ chuẩn hơn ..


// bạn cứ dùng nguyên cấu trúc file như này ... chỉ đổi MenuCOmpoent hiển thị tất cả các món ăn == StaffListCOmponet  hiển thị thông tin tất cả nhân viên

// đổi DishDetail = StaffDetail  là xong
 // cấu trúc nó giống y hệt phần lab này ... bạn có thể xử dụng luôn ko cần code lại từ đầu ... ý mình là thế ^^ 
 // Nhưng viết ở App.js phải không ạ?... tại sao bạn cứu thắc mắc app,js làm gì ,,, nó không quan trọng đâu ....
   
   //thay vì hiển thị Menux bạn hiển thị StaffList là xong 
   <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
        <Route exact path='/contactus' component={Contact} />
        {/* <Route path='/menu/:dishId' component={DishWithId} /> */}
        {/* <Route exact path='/contactus' component={Contact} />} /> */}
        <Redirect to="/home" />
    </Switch>
  }
}

export default Main;