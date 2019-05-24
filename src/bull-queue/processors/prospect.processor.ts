import { ApplicationContext } from '../../app.context';
import { ProspectService } from '../../prospect/prospect.service';

const ProspectProcessor = async (job) => {

  const context = await ApplicationContext();
  const prospectService = context.get(ProspectService);

  return await prospectService.fetch(job.data)
    .then(data=> Promise.resolve(data))
    .catch(err=> Promise.reject(err))
};

export { ProspectProcessor }