import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from '@/common/components/context/general/Footer/Footer';

const heading = [
  'Nossos cafés',
  'Institucional',
  'Atendimento',
  'Para Seu Negócio',
  'Central de Relacionamento',
  'Siga a Coffee Delivery',
];

const subheading = [
  { title: 'Telefone:', value: '(00) 0000-0000' },
  { title: 'E-mail:', value: 'sac@coffeedelivery.com' },
];

const links = [
  { label: 'Grão', href: '/#' },
  { label: 'Grão', href: '/#' },
  { label: 'Moído', href: '/#' },
  { label: 'Cápsula', href: '/#' },
  { label: 'Kits', href: '/#' },
  { label: 'Acessórios', href: '/#' },
  { label: 'Todos os cafés', href: '/#' },
  { label: 'Política de Privacidade', href: '/#' },
  { label: 'Quem Somos', href: '/#' },
  { label: 'Política de reembolso', href: '/#' },
  { label: 'Termos de serviço', href: '/#' },
  {
    label: 'Para cafeterias, empórios, escritórios, eventos e ++',
    href: '/#',
  },
  {
    label: 'Tire sua dúvida',
    href: '/#',
  },
];

const socialLinks = [
  { id: 'facebook', href: '/#' },
  { id: 'instagram', href: '/#' },
  { id: 'whatsapp', href: '/#' },
  { id: 'youtube', href: '/#' },
];

describe('Footer component', () => {
  it('should renders heading, links, icons and image', () => {
    render(<Footer />);

    heading.forEach(head => {
      const headFound = screen.getByText(head);
      expect(headFound).toBeInTheDocument();
    });

    subheading.forEach(subhead => {
      const titleFound = screen.getByText(subhead.title);
      const valueFound = screen.getByText(subhead.value);

      expect(titleFound).toBeInTheDocument();
      expect(valueFound).toBeInTheDocument();
    });

    links.forEach(link => {
      const linkFound = screen.getByText(link.label);

      expect(linkFound).toBeInTheDocument();
      expect(linkFound).toHaveAttribute('href', link.href);
    });

    socialLinks.forEach(link => {
      const linkFound = screen.getByTestId(link.id);

      expect(linkFound).toBeInTheDocument();
      expect(linkFound).toHaveAttribute('href', link.href);
    });

    const openingHours = screen.getByText('De segunda a sexta das 10 ás 17h');
    expect(openingHours).toBeInTheDocument();

    const coffeDeliveryImg = screen.getByAltText(/Coffe Delivery/i);
    expect(coffeDeliveryImg).toBeInTheDocument();
  });
});
