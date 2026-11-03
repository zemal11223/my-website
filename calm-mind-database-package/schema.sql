-- =========================================================
-- CALM MIND - Official Database Schema
-- Compatible with MySQL, PostgreSQL, and SQLite
-- =========================================================

CREATE TABLE IF NOT EXISTS feedbacks (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    rating INT DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS meditation_sessions (
    id VARCHAR(64) PRIMARY KEY,
    mood VARCHAR(50) NOT NULL,
    session_type VARCHAR(100) NOT NULL,
    duration_sec INT NOT NULL,
    completed BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Feedbacks
INSERT INTO feedbacks (id, name, email, rating, message, created_at) VALUES
('fb_1', 'Maya', 'maya28@example.com', 5, 'This app helped me calm my anxiety before bed. So peaceful and easy.', '2026-03-15 21:30:00'),
('fb_2', 'Jordan', 'jordan34@example.com', 5, 'Love the emotion check-ins. I finally feel aware of what I am feeling.', '2026-03-20 14:15:00'),
('fb_3', 'Priya', 'priya41@example.com', 5, 'The meditations are gentle and calming. My daily calm now.', '2026-03-28 08:45:00');

-- Seed Meditation Sessions
INSERT INTO meditation_sessions (id, mood, session_type, duration_sec, completed, created_at) VALUES
('sess_1', 'anxious', '4-7-8 Breathing', 180, true, '2026-03-30 10:00:00');
