import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('Booking form', () => {
  const availableTimes = ['17:00', '18:00'];
    const submitData = jest.fn();

  test('should correctly render all fields and their default values', async () => {
    render(
      <BookingForm availableTimes={availableTimes} submitData={submitData} />
    );

    const dateInputSelect = screen.getByLabelText(/Date Time:/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of Guests:/);
    const commentInput= screen.getByLabelText(/Comment:/);
    const submitButton = screen.getByRole('button');

    expect(dateInputSelect).toBeInTheDocument();
    expect(dateInputSelect).toHaveAttribute('type', 'datetime-local');
    expect(dateInputSelect).toHaveAttribute('id', 'book-datetime');

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute('id', 'book-guests');
    expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
    expect(numberOfGuestsInput).toHaveValue(1);

    expect(commentInput).toBeInTheDocument();
    expect(commentInput).toHaveAttribute('id', 'book-comment');

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeEnabled();
  });

});