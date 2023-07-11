import { updateEdgeConfig } from '../../utils/update-edge-config'
import { fetchDatafile } from './../../utils/fetch-optimizely-datafile'

export default function Home() {
  updateEdgeConfig();

  return (
    <div>
      hello
    </div>
  )
}
