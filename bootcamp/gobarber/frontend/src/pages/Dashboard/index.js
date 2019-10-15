import React from 'react';
import api from '../../services/api';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button>
          <MdChevronLeft size={36} color="#fff" />
          <strong>data</strong>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Armando Tomazzoni</span>
        </Time>
        <Time available>
          <strong>08:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Armando Tomazzoni</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Armando Tomazzoni</span>
        </Time>
      </ul>
    </Container>
  );
}
