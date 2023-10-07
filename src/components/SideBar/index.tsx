import { ExternalLink } from '@/components/ExternalLink';
import { Profile } from '@/components/Profile';
import { ProjectExperiencias } from '../Experiencias';
import data from '../../data.json'

import styles from "./index.module.css";
import { ProjectImage } from '@/components/ProjectImage';

export function SideBar ( ) {
    return (
        <main className={styles.main}>
        <div>
          <Profile />

          <div>
            <h4>Especialização</h4>
            <p>Breve descrição</p>
          </div>

          <div className={styles.socialMedia}>
            <ExternalLink
              link="https://www.linkedin.com/in/robsonwss/"
              title="Linkedin"
            />

            <ExternalLink 
            link="https://github.com/robsonwssantos" 
            title="GitHub" 
            />

            <ExternalLink 
            link="https://www.instagram.com/rwss96/" 
            title="Instagram" 
            />
          </div>

          <div>
            <h2>Experiências:</h2>
          </div>

          <div>
            <ProjectExperiencias
              cargo='Cargo'
              descricao='Breve Descrição'
              ano='2023'
            />
            <ProjectExperiencias
              cargo='Cargo'
              descricao='Breve Descrição'
              ano='2023'
            />
            <ProjectExperiencias
              cargo='Cargo'
              descricao='Breve Descrição'
              ano='2023'
            />
          </div>
        </div>

        <div>
        {data.map((project) => {
            return (
              <ProjectImage
                key={project.id}
                img={project.imagem}
                alt={project.titulo}
              />
            );
          })}
        </div>

      </main>
    );
}