import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  basketItems: {
    flexGrow: "2"
  },
  basketSummary: {
    flexGrow: "1",
    margin: theme.spacing(2, 2)
  },
  basketItem: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(2, 2)
  },
  list: {
    listStyleType: "none"
  }
}));
const Basket = props => {
  const { basket } = props;
  const classes = useStyles();
  console.log(basket[0]);
  // function which counts total cost of the order
  let totalCost = basket.reduce(function(acc, currentValue) {
    return acc + currentValue.price.current.value;
  }, 0);
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.basketItems}>
          <ul className={classes.list}>
            {basket.map(item => {
              return (
                <li>
                  <Paper className={classes.basketItem}>
                    {item.name}
                    {item.price.current.text}
                    {item.isInStock ? "IN STOCK" : null}
                    REMOVE
                  </Paper>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes.basketSummary}>
          <Paper>
            <h1>Order summary:</h1>
            <h4>Total cost: {totalCost} EUR</h4>
          </Paper>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  basket: state.products.basket,
  loading: state.products.loading
});

export default connect(mapStateToProps)(Basket);
