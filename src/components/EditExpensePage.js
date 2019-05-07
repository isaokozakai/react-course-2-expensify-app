import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import ConfirmationModal from './ConfirmationModal'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
  state = {
    modalIsOpen: false
  };

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  openModal = () => {
    this.setState(() => ({ modalIsOpen: true }));
  }

  closeModal = () => {
    this.setState(() => ({ modalIsOpen: false }));
  }

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.setState(() => ({ modalIsOpen: false }));
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.openModal}>Remove Expense</button>
        </div>
      <ConfirmationModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} onRemove={this.onRemove} />
      </div>
    );
  };
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);