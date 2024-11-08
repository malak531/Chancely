import React from 'react';
import './PendingRequests.css';

const PendingRequests = () => {
  return (
    <main className="pending-organizations-admin">
      <section className="window-frame">
        <header className="address-bar">
          <div className="logo-container">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/037e5f926bab8fbede6c0fdfbf6cfb613fb7b2f2fcee89cb0c84207163cc200e?placeholderIfAbsent=true&apiKey=218bd92b074948a89f9ff4d5fadeb9e2" alt="Logo" className="logo" />
            <div className="navigation-icons">
              <div className="icon-group">
                <span className="icon">􀏚</span>
                <div className="divider"></div>
                <span className="icon small">􀆈</span>
              </div>
              <div className="tab-icons">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/00b8143b83d39f2ed3a7962c89b7f877956b6aaa0da81006511c53ce560e4eb8?placeholderIfAbsent=true&apiKey=218bd92b074948a89f9ff4d5fadeb9e2" alt="Tab icon 1" className="tab-icon" />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/75c1c0e3e6db89097b2b17495e099908965bad294dd7d0aefa1371163701ed78?placeholderIfAbsent=true&apiKey=218bd92b074948a89f9ff4d5fadeb9e2" alt="Tab icon 2" className="tab-icon" />
              </div>
            </div>
          </div>
          <div className="search-and-nav">
            <div className="search-field">
              <div className="search-address">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1043cdcfa3fcb65f6e6d1aa964f81ad600b8895db04541c751cfc4cae9d2f57?placeholderIfAbsent=true&apiKey=218bd92b074948a89f9ff4d5fadeb9e2" alt="Lock icon" className="lock-icon" />
                <span className="domain">chancely.com</span>
              </div>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/566266c16c5ee693d34fcd318c7457a51a583778ff7e10fc266656c972a14969?placeholderIfAbsent=true&apiKey=218bd92b074948a89f9ff4d5fadeb9e2" alt="Refresh icon" className="refresh-icon" />
            </div>
            <nav className="navigation">
              <div className="nav-icons">
                {['https://cdn.builder.io/api/v1/image/assets/TEMP/d411b4b4dcd98107af96be1cd9a576dc3ec5a4ec96fff45d247b85904a108063?placeholderIfAbsent=true&apiKey=218bd92b074948a89f9ff4d5fadeb9e2', 'https://cdn.builder.io/api/v1/image/assets/TEMP/0573ede995aa9c1fe19283ba2782c4b9607e8582febe42d817d9dbbd811582d9?placeholderIfAbsent=true&apiKey=218bd92b074948a89f9ff4d5fadeb9e2', 'https://cdn.builder.io/api/v1/image/assets/TEMP/d63790704cffe0d71a005dc22c759d608df1bae7910213ed995cd90367c0da74?placeholderIfAbsent=true&apiKey=218bd92b074948a89f9ff4d5fadeb9e2'].map((src, index) => (
                  <img key={index} src={src} alt={`Navigation icon ${index + 1}`} className="nav-icon" />
                ))}
              </div>
              <div className="nav-symbols">
                {['􀁸', '􀈂', '􀅼'].map((symbol, index) => (
                  <span key={index} className="nav-symbol">{symbol}</span>
                ))}
              </div>
            </nav>
          </div>
        </header>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e655b7eed3dcf29505544a9e039f3fc73de9a6b6371a0b4f2a63c1e3d8fc9629?placeholderIfAbsent=true&apiKey=218bd92b074948a89f9ff4d5fadeb9e2" alt="Pending Organizations Admin Dashboard" className="dashboard-image" />
      </section>
    </main>
  );
};

export default PendingRequests;