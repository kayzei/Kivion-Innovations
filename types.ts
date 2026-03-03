import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
}

export interface ProjectMockup {
  id: string;
  name: string;
  tagline: string;
  category: 'Software' | 'IoT' | 'Media' | 'Health';
  description: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}