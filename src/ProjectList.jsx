export default function ProjectList({ projects }) {
    return (
        <div className="project-list">
            {projects.map(project => (
                <div className="project-card">
                    <img src={project.img} alt={ project.category } />
                </div>
            ))}
        </div>
    );
}