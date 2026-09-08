import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DoctorCard } from '../components/DoctorCard';

const doctor = {
  id: 42,
  full_name: 'Dr. Asha Rao',
  specialty: 'Cardiologist',
  qualification: 'MBBS, MD',
  experience_years: 8,
  hospital_name: 'Telemed Hospital',
  consultation_fee: 700,
  avatar_url: '/default-doctor.png',
};

describe('DoctorCard', () => {
  it('renders doctor information and navigation actions', () => {
    render(
      <MemoryRouter>
        <DoctorCard doctor={doctor} />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Dr. Asha Rao' })).toBeInTheDocument();
    expect(screen.getByText('Cardiologist • MBBS, MD')).toBeInTheDocument();
    expect(screen.getByText('₹700')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Profile' })).toHaveAttribute('href', '/doctors/42');
    expect(screen.getByRole('link', { name: 'Book Now' })).toHaveAttribute('href', '/book-appointment/42');
  });
});
