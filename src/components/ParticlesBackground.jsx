import React, { useCallback, useMemo } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesConfig from './config/particlesConfig'
import { useTheme } from '../context/ThemeContext'

const ParticlesBackground = () => {
    const { isDark } = useTheme();

    const particlesInit = useCallback((engine) => {
        loadFull(engine)
    }, []);

    const dynamicOptions = useMemo(() => {
        return {
            ...particlesConfig,
            particles: {
                ...particlesConfig.particles,
                color: {
                    value: isDark ? "#0DFC4B" : "#10B981"
                },
                line_linked: {
                    ...particlesConfig.particles.line_linked,
                    color: isDark ? "#0DFC4B" : "#10B981",
                    opacity: isDark ? 0.15 : 0.25
                }
            }
        };
    }, [isDark]);

    return (
        <div>
            <Particles id="tsparticles" options={dynamicOptions} init={particlesInit} />
        </div>
    )
}

export default ParticlesBackground
