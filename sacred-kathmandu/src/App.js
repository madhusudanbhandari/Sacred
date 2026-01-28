import React, { useState } from 'react';
import './App.css';
import { religiousSites } from './data/sites';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import SearchFilter from './components/SearchFilter';
import SiteGrid from './components/SiteGrid';
import Modal from './components/Modal';
import Footer from './components/Footer';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentFilter, setCurrentFilter] = useState('all');
    const [selectedSite, setSelectedSite] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredSites = religiousSites.filter(site => {
        const matchesFilter = currentFilter === 'all' || site.type === currentFilter;
        
        const matchesSearch = searchTerm === '' || 
            site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            site.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            site.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            site.significance.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    const openModal = (siteId) => {
        const site = religiousSites.find(s => s.id === siteId);
        setSelectedSite(site);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSite(null);
    };

    return (
        <div className="App">
            <Header />
            
            <main className="container">
                <StatsCards sites={filteredSites} />
                
                <SearchFilter
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    currentFilter={currentFilter}
                    onFilterChange={setCurrentFilter}
                />
                
                <SiteGrid
                    sites={filteredSites}
                    onOpenModal={openModal}
                />
            </main>

            <Modal
                site={selectedSite}
                isOpen={isModalOpen}
                onClose={closeModal}
            />

            <Footer />
        </div>
    );
}

export default App;