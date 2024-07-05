document.addEventListener('DOMContentLoaded', () => {
    const tasks = [
        'namaz', 'workout', 'gate', 'placement',
        'autocad', 'research', 'meditation',
        'diary', 'selfcare'
    ];

    tasks.forEach(task => {
        const container = document.getElementById(task);
        for (let i = 0; i < 30; i++) {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            container.appendChild(checkbox);
        }
    });
});