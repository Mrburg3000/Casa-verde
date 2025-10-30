/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { Mail, ShoppingCart, ChevronRight } from 'lucide-react';


export default function CasaVerde() {
  const [email, setEmail] = useState('');

  const produtos = [
    {
      nome: "Ajuga reptans",
      preco: "R$ 20,00",
      imagem: "/images/produto1.svg"
    },
    {
      nome: "Cordeline fruticosa",
      preco: "R$ 20,00",
      imagem: "/images/produto2.svg"
    },
    {
      nome: "Crassula ovata",
      preco: "R$ 20,00",
      imagem: "/images/produto3.svg"
    },
    {
      nome: "Cyperus rotundus",
      preco: "R$ 20,00",
      imagem: "/images/produto4.svg"
    },
    {
      nome: "Delairea odorata",
      preco: "R$ 20,00",
      imagem: "/images/produto5.svg"
    },
    {
      nome: "Datura metel",
      preco: "R$ 20,00",
      imagem: "/images/produto6.svg"
    }
  ];

  const handleSubmit = () => {
    if (email) {
      alert(`Newsletter cadastrado: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.svg" 
              alt="Casa Verde Logo"
              className="w-50 h-10 object-contain"
            />
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#" className="text-gray-700 hover:text-green-700 transition-colors">Como fazer</a>
            <a href="#ofertas" className="text-yellow-500 font-semibold">Ofertas</a>
            <a href="#" className="text-gray-700 hover:text-green-700 transition-colors">Depoimentos</a>
            <a href="#" className="text-gray-700 hover:text-green-700 transition-colors">Vídeos</a>
            <a href="#" className="text-gray-700 hover:text-green-700 transition-colors flex items-center gap-2">
              <ShoppingCart size={20} />
              Meu carrinho
            </a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <p className="--font-Mont text-gray-500 mb-4">Sua casa com as</p>
              <h1 className="font-Elsie text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                MELHORES<br />PLANTAS
              </h1>
              
              <p className="font-Mont text-gray-600 mb-8 max-w-md leading-relaxed">
                Encontre aqui uma vasta seleção de plantas para decorar a 
                sua casa e torná-la uma paixão mais feliz no seu dia a dia. 
                Entre com seu e-mail e assine nossa newsletter para saber 
                das novidades da marca.
              </p>

              <div className="flex gap-0 max-w-md">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Insira seu e-mail"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold transition-colors whitespace-nowrap"
                >
                  Assinar newsletter
                </button>
              </div>
            </div>

            <div className="relative h-[600px] flex items-center justify-center">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400 rounded-full transform translate-x-20 -translate-y-10"></div>
              
              <img 
                src="/images/hero-plant.svg" 
                alt="Planta decorativa"
                className="relative z-10 w-200 h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-lg p-12 transform -rotate-3 hover:rotate-0 transition-transform overflow-hidden">
                <img 
                  src="/images/monstera.svg" 
                  alt="Monstera"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <p className="font-Mont text-gray-500 mb-4">Como conseguir</p>
              <h2 className="font-Elsie text-5xl font-black text-gray-900 mb-12">
                MINHA PLANTA
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                  </div>
                  <div>
                    <h3 className="font-Mont font-bold text-gray-900 text-lg mb-1">Escolha suas plantas</h3>
                    <p className="font-Mont text-gray-600">Selecione as plantas que mais combinam com você</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                  </div>
                  <div>
                    <h3 className="font-Mont font-bold text-gray-900 text-lg mb-1">Faça seu pedido</h3>
                    <p className="font-Mont text-gray-600">Adicione ao carrinho e finalize a compra</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">

                  </div>
                  <div>
                    <h3 className="font-Mont font-bold text-gray-900 text-lg mb-1">Aguarde na sua casa</h3>
                    <p className="font-Mont text-gray-600">Receba suas plantas com todo cuidado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ofertas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-Mont text-gray-500 mb-4">Conheça nossas</p>
            <h2 className="font-Elsie text-6xl font-black text-gray-900">OFERTAS</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((produto, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:transform hover:scale-105"
              >

                <div className="bg-gray-50 h-80 p-8 flex items-center justify-center overflow-hidden group">
                  <img 
                    src={produto.imagem} 
                    alt={produto.nome}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="font-Elsie text-2xl font-black text-gray-900 mb-2">
                    {produto.nome}
                  </h3>
                  <p className="font-Mont text-gray-600 font-semibold mb-4">{produto.preco}</p>
                  
                  <button className="font-Mont flex items-center gap-2 text-yellow-500 hover:text-yellow-600 font-semibold group">
                    Comprar
                    <ChevronRight 
                      size={20} 
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/images/logo.svg" 
                  alt="Casa Verde Logo"
                  className="w-50 h-10 object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Transformando casas em jardins desde 2020
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Menu</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Como fazer</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ofertas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Vídeos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>contato@casaverde.com</li>
                <li>(11) 99999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Receba novidades e ofertas
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none"
                />
                <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded transition-colors">
                  Assinar
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 CasaVerde. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}