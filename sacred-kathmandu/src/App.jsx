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
    // STATE MANAGEMENT
    const [searchTerm, setSearchTerm] = useState('');
    const [currentFilter, setCurrentFilter] = useState('all');
    const [currentDistrict, setCurrentDistrict] = useState('all');
    const [selectedSite, setSelectedSite] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // GET UNIQUE DISTRICTS - SIMPLIFIED
    const getDistricts = () => {
        const districtSet = new Set();
        religiousSites.forEach(site => {
            if (site.district) {
                districtSet.add(site.district);
            }
        });
        return Array.from(districtSet).sort();
    };

    const districts = getDistricts();

    // FILTER LOGIC
    const getFilteredSites = () => {
        return religiousSites.filter(site => {
            // Filter by district
            const matchesDistrict = currentDistrict === 'all' || site.district === currentDistrict;
            
            // Filter by category/type
            const matchesFilter = currentFilter === 'all' || site.type === currentFilter;
            
            // Filter by search term
            const matchesSearch = searchTerm === '' || 
                site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                site.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                site.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                site.significance.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (site.district && site.district.toLowerCase().includes(searchTerm.toLowerCase()));

            return matchesDistrict && matchesFilter && matchesSearch;
        });
    };

    const filteredSites = getFilteredSites();

    // OPEN MODAL
    const openModal = (siteId) => {
        const site = religiousSites.find(s => s.id === siteId);
        setSelectedSite(site);
        setIsModalOpen(true);
    };

    // CLOSE MODAL
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
                    currentDistrict={currentDistrict}
                    onDistrictChange={setCurrentDistrict}
                    districts={districts}
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